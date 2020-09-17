import stringFormat from './stringFormat'

export default (args: string[]) =>
    args.reduce((acc, val) => (acc += stringFormat(val)), '')
