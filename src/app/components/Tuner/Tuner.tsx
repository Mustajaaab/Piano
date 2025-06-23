"use client";

import { RecordButton } from "../RecordButton";
import { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import * as styles from "./tuner.css";

import BrowserAudio from "./libs/browserAudio";
import {
  getAutocorrelatedValues,
  getFrequency,
  getNoteFromFrequency,
  DetectedNote,
} from "./libs/pitchDetector";
import { centsOffToPercentage } from "./utils";
import { NoteIndicator } from "../NoteIndicator";

type ITuner = { instrument: Instrument };
type Instrument = "guitar";

const browserAudio = new BrowserAudio(
  typeof window !== "undefined" ? window : undefined
);
const buffer = new Float32Array(browserAudio.getFftSize());

const audioContext = browserAudio.getAudioContext();
const analyser = browserAudio.getAnalyser();

export function Tuner(props: ITuner) {
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();
  const [note, setNote] = useState<DetectedNote | undefined>();
  const [isListening, setListening] = useState(false);

  const startTuner = async () => {
    if (!audioContext) return;
    const microphone = await browserAudio.getMicStream();

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    setSource(audioContext.createMediaStreamSource(microphone));
    setListening(true);
  };

  const stopTuner = async () => {
    if (source && analyser) {
      source.disconnect(analyser);
    }
    setListening(false);
    setNote(undefined);
    setSource(undefined);
  };

  const getPitch = () => {
    if (!analyser || !audioContext) return;
    analyser.getFloatTimeDomainData(buffer);
    const correlatedValues = getAutocorrelatedValues(buffer);
    const frequency = getFrequency(correlatedValues, audioContext.sampleRate);

    if (frequency > -1) {
      const note = getNoteFromFrequency(frequency);
      setNote(note);
    }
  };

  useEffect(() => {
    let audioSample: NodeJS.Timeout;
    if (source != null && analyser) {
      source.connect(analyser);
      audioSample = setInterval(getPitch, 1);
    }
    return () => clearInterval(audioSample);
  }, [source]);

  const percent = centsOffToPercentage(note?.centsOff || 0) * 100;

  switch (props.instrument) {
    case "guitar":
      return (
        <div className={styles.container}>
          <ResponsiveContainer width="100%" height={200}>
            <RadialBarChart
              cx="50%"
              cy="100%"
              innerRadius="40%"
              outerRadius="100%"
              startAngle={180}
              endAngle={0}
              data={[
                {
                  name: "accuracy",
                  value: percent,
                  fill: "#00C49F",
                },
              ]}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar background dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>

          <NoteIndicator note={note} />
          <div className={styles.controls}>
            <RecordButton
              pressed={isListening}
              onClick={isListening ? stopTuner : startTuner}
            />
          </div>
        </div>
      );
    default:
      return <></>;
  }
}
