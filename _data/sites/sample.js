module.exports = {
  name: "Sample", // optional, falls back to object key
  description: "The default sites that get tested",
  options: {
    frequency: 60 * 23, // (in minutes), 23 hours
  },
  urls: [
    "https://www.speedlify.dev/",
    "https://emcasa.com/imoveis/sp/sao-paulo?nextView=true",
  ],
};
