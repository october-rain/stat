#! /usr/bin/env node
import os from "node:os"
import si from "systeminformation"

// 使用 os 模块获取基本信息
export const getBasicSystemInfo = () => {
  const platform = os.platform()
  const release = os.release()
  const cpuArch = os.arch()
  const totalMem = os.totalmem()
  const freeMem = os.freemem()
  return {
    platform,
    release,
    cpuArch,
    totalMem,
    freeMem,
  }
}

// 使用 systeminformation 获取更详细的信息
export async function getDetailedSystemInfo() {
  const cpuInfo = await si.cpu()
  const diskInfo = await si.diskLayout()
  const networkInfo = await si.networkInterfaces()

  return {
    cpuInfo,
    diskInfo,
    networkInfo,
  }
}

getDetailedSystemInfo();