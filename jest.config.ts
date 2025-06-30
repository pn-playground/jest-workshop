module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/jest/tests/**/*.spec.(js|jsx|ts|tsx)'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/jest/$1' },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue', 'jsx'],
  setupFiles: ['dotenv/config'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'node',
  testTimeout: 50000
}
