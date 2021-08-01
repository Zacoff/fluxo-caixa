class EmailAlreadyExists extends Error {
  constructor () { super('Email already exists') }
}

export { EmailAlreadyExists }
