module.exports = {
  title: "vuepressbug1577",
  // Disable prefetches to reproduce the problem easily.
  shouldPrefetch: () => {
    return false;
  }
};
