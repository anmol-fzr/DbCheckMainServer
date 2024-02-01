function compareDominantFreqs(stockFreqs: number[], customFreqs: number[]) {
  const freqDiff = Math.abs(stockFreqs.length - customFreqs.length);

  const avgDistance =
    stockFreqs.reduce((sum, freq) => {
      const closestCustomFreq = customFreqs.reduce(
        (minDiff, customFreq) => Math.min(minDiff, Math.abs(freq - customFreq)),
        Infinity
      );
      return sum + closestCustomFreq;
    }, 0) / Math.max(stockFreqs.length, customFreqs.length);

  const score = freqDiff * 2 + avgDistance;
  const customThreshold = 5;

  return {
    difference: freqDiff,
    // averageDistance: avgDistance,
    // score,
    prediction: score >= customThreshold ? "custom" : "stock",
  };
}

export { compareDominantFreqs };
