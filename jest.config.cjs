module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Per aggiungere matcher di Jest-DOM
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Trasformazione dei file TS/TSX
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Se usi alias di import
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignora la cartella build
};
