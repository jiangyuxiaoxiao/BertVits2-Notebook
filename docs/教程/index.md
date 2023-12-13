---
title: "环境安装"
hide_title: false
sidebar_position: 0
last_update:
  date: "2023-12-13"
  author: "Sora"
---

## 1. Python安装

在[Python官网](https://www.python.org/downloads/)上下载Python并安装，推荐Python版本`3.11`。安装时建议将Python加入环境变量中，
对于windows系统而言，只需要在Python安装程序运行时勾选选项`Add Python to Path`即可，如下图所示。（图上是未勾选状态）
![](/img/docs/python.png)

安装完成后，在搜索框内输入`cmd`并点击命令提示符应用，进入应用后输入`python`后按回车，出现类似如下的输出则Python安装成功

```powershell
PS C:\Users\我去，初音未来> python
Python 3.11.4 (tags/v3.11.4:d2340ef, Jun  7 2023, 05:45:37) [MSC v.1934 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

### 下载链接

+ [Python 3.11 windows-64 installer](https://www.python.org/ftp/python/3.11.7/python-3.11.7-amd64.exe)
+ [Python 3.10 windows-64 installer](https://www.python.org/ftp/python/3.10.10/python-3.10.10-amd64.exe)
+ [Python 3.9 windows-64 installer](https://www.python.org/ftp/python/3.9.13/python-3.9.13-amd64.exe)
+ [Python 3.8 windows-64 installer](https://www.python.org/ftp/python/3.8.10/python-3.8.10-amd64.exe)

### 详细文档

请参考Python官方教程或自行百度
[Python安装参考文档](https://docs.python.org/zh-cn/3.11/using/index.html)

## 2. 项目拉取

在项目的release界面下载项目，链接[https://github.com/fishaudio/Bert-VITS2/releases/tag/v2.2](https://github.com/fishaudio/Bert-VITS2/releases/tag/v2.2)

## 3. 添加虚拟环境

### 3.1 直接添加

在项目根目录打开powershell（鼠标右键，在终端中打开）。按顺序执行命令

```powershell
pip install virtualenv
virtualenv venv
```

**请注意，在后续教程中，若无明确说明，则powershell的运行目录均为项目根目录，且已激活虚拟环境。
小白推荐使用pycharm来运行项目，因为在pycharm项目的终端默认的路径就是项目根目录，且默认激活项目虚拟环境。**  

执行成功后，项目根目录会出现一个venv文件夹。每次使用项目都需要先激活环境，如果你不知道什么是虚拟环境请使用IDE来管理，参考3.2节。

激活虚拟环境命令：

```powershell
venv\Scripts\activate
```

### 3.2 IDE中添加虚拟环境

小白推荐使用Pycharm安装环境并运行项目。推荐参考教程[Pycharm 创建并管理虚拟环境](https://zhuanlan.zhihu.com/p/640957757)

## 4. Pytorch安装

### 4.1 pip设置代理

由于一些神秘原因可能会导致pytorch下载失败，此时需要一个vpn软件，并给pip设置一个vpn代理。
可以参考教程[Conda、Git、pip设置代理教程](https://blog.csdn.net/m0_61634551/article/details/130867867)

### 4.2 pip换源

其他python包的安装建议对pip进行换源（如果在tx云、阿里云之类的云服务器上就不需要了，服务器自带的pip会使用内网的pip镜像）。可以参考教程
[pip换源](https://zhuanlan.zhihu.com/p/551940762)

### 4.3 安装

进入[pytorch官网](https://pytorch.org/)，并在 **INSTALL PYTORCH** 处根据自己电脑的环境进行选择，复制 **Run this Command** 
右侧的安装指令后激活虚拟环境并运行指令即可。注意请选择适合自己显卡的 **cuda** 版本。  
以windows为例：
![](/img/docs/pytorch.png)

查看显卡cuda版本：
```powershell
nvidia-smi
```

pytorch安装（**在虚拟环境下**）： 
```powershell
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

## 5. 其他python依赖安装

一般安装python包需先换源，参考[4.2节](#42-pip换源)

随后安装python包（**在虚拟环境下**）：
```powershell
pip install -r requirements.txt
```

## 6. 依赖文件获取下载

### 6.1 nltk

### 6.2 openjtalk

### 6.3 bert

### 6.4 emotion

## 7. 测试运行