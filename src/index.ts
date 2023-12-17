#! /usr/bin/env node
import { program } from "commander"
import fs from "node:fs"
import { getBasicSystemInfo, getDetailedSystemInfo } from "./util.ts"
import { wrapper } from "./wrapper.ts"

const init = async () => {
  const json = JSON.parse(fs.readFileSync("./package.json", "utf-8"))

  program.version(json.version) //创建版本号

  program.option("-b --basic", "输出基本信息")
  program.option("-c --cpu", "输出 cpu 信息")

  program.parse(process.argv)

  const detailInfo = await getDetailedSystemInfo()
  
  const options = program.opts()
  if (options.cpu) {
    console.log(wrapper("cpuInfo", detailInfo.cpuInfo))
    // console.log(wrapper("diskInfo", detailInfo.diskInfo))
    // console.log(wrapper("networkInfo", detailInfo.networkInfo))
  } else {
    const basicInfo = getBasicSystemInfo()
    console.log(wrapper("basicInfo", basicInfo))
  }
}

init()