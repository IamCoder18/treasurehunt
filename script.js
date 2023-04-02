import { JsShell } from "./jsShell.js";

const shell = new JsShell('shell');
shell.setWidth('100%').setHeight('100vh').setPrompt('$ ')

const commands = ["ls", "cat", "help"]
const filesystem = ["d0No1OpEnthi2.txt", "corrupted.file"]
const filesystemData = ["So. This really is the end. Or is it? It was a long journey here. On our way here, I learned that I hate even characters of words. Anyway, back to the speech. Filled with puzzles and mindbenders. But alas, what goes up must come down. At the end of this long journey is one final puzzle. Yjosuvri p5rgibzxev ipsu hliqdmdveynb bqyq tjhrer dpoqgw.", "[1b]: I can't forget the password! Let me remember. Oh yeah! The password i2#fy!_(*{} mw. ///// [ERROR]: THIS FILE IS CORRUPTED (STACK TRACE) C:/corrupted.file(Line:Character, 1:76)"]

while (true) {
    let inputRaw = await shell.input();
    let input = inputRaw.split(" ")
    if (commands.includes(input[0])) {
        if (input[0] == "ls") {
            shell.print(`[${filesystem.toString()}]`)
        } else if (input[0] == "cat") {
            if (filesystem.includes(input[1])) {
                if (filesystem.indexOf(input[1]) == 0) {
                    let pass = await shell.input("Please Enter a Password: ")
                    if (pass == "hi") {
                        shell.print(filesystemData[0])
                    } else {
                        shell.print("Incorrect Password")
                    }
                } else {
                    shell.print(filesystemData[filesystem.indexOf(input[1])])
                }
            } else {
                shell.print(`Can't find file C:/${input[1]}`)
            }
        } else if (input[0] == "help") {
            shell.print(`All commands are: ${commands}`)
        }
    } else {
        shell.print(`${input[0]} is not a valid command. Use "help" for possible commands`)
    }
}