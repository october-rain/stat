import chalk from "chalk"
import figlet from "figlet"
import boxen from "boxen"

export const wrapper = (title: string, content: Record<string, any>) => {
  const keyValuePairs = Object.entries(content)
    .map(([key, value]) => `${chalk.green(key)}: ${chalk.yellow(value)}`)
    .join("\n")

  const figletText = figlet.textSync(title)
  const coloredTitle = chalk.blue(figletText)

  const boxedOutput = boxen(`${coloredTitle}\n\n${keyValuePairs}`, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "magenta",
  })

  return boxedOutput
}
