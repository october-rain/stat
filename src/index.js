#! /usr/bin/env node
import os from "node:os"
import si from "systeminformation"

// 使用 os 模块获取基本信息
function getBasicSystemInfo() {
  return {
    platform: os.platform(),
    release: os.release(),
    cpuArch: os.arch(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  }
}

// 使用 systeminformation 获取更详细的信息
async function getDetailedSystemInfo() {
  const cpuInfo = await si.cpu()
  const diskInfo = await si.diskLayout()
  const networkInfo = await si.networkInterfaces()

  return {
    cpuInfo,
    diskInfo,
    networkInfo,
  }
}

// 示例函数调用
console.log(getBasicSystemInfo())
getDetailedSystemInfo().then(console.log)
