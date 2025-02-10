import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

// Stable Hashing Function
const hashString = async (str) => {
  try {
    const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch (e) {
    console.warn("Hashing failed, using Base64 fallback", e);
    return btoa(str).replace(/=/g, "");
  }
};

// Detect Brave Browser
const isBrave = async () => navigator.brave && (await navigator.brave.isBrave());

// Extract Fingerprint Data
const getFingerprintData = async () => {
  const parser = new UAParser();
  const { browser, os, device } = parser.getResult();
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  const braveDetected = await isBrave();

  // Stable WebGL Hashing
  const getWebGLHash = () => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return gl
        ? (gl.getParameter(gl.RENDERER) + "|" + gl.getParameter(gl.VENDOR)).toLowerCase().trim()
        : "No WebGL";
    } catch {
      return "No WebGL";
    }
  };

  // Stable AudioContext Hashing
  const getAudioHash = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      return audioContext.sampleRate.toString();
    } catch {
      return "No Audio";
    }
  };

  const webGL = getWebGLHash();
  const audioHash = getAudioHash();

  return braveDetected
    ? `${os.name}||${device.model || "Unknown"}||${screenRes}||Brave||${webGL}||${audioHash}`
    : `${os.name}||${device.model || "Unknown"}||${screenRes}||${browser.name}||${webGL}||${audioHash}`;
};

// Generate Stable Fingerprint
const getFingerprint = async () => {
  try {
    const data = await getFingerprintData();
    return await hashString(data);
  } catch (e) {
    console.error("Fingerprint generation failed:", e);
    return "Error";
  }
};

// Native Cookie Helpers
const setCookie = (name, value, days = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : "";
};

function App() {
  const [fingerprint, setFingerprint] = useState(() => getCookie("fingerprint") || "");

  useEffect(() => {
    if (!fingerprint) {
      getFingerprint().then((fp) => {
        setFingerprint(fp);
        setCookie("fingerprint", fp, 365);
      });
    }
  }, [fingerprint]);

  return <div>Device Fingerprint: {fingerprint}</div>;
}

export default App;
