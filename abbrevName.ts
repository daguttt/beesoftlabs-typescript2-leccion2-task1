const name = "Daniel Gutiérrez"
function abbrevName(name: string): string {
	const firstLetter = name.split(" ")[0][0].toUpperCase()
	const secondLetter = name.split(" ")[1][0].toUpperCase()
  return `${firstLetter}.${secondLetter}`
}
abbrevName(name)