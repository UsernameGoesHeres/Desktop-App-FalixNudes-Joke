## Warning
### READ BEFORE USING

Decided to do this as a joke of of the FalixNudes thing.
Decided to change everything related to FalixNodes to FalixNudes :)
(links didnt change just the gp.falixnodes.net to panel.falixnodes.net and done)

## FAQ for Developers
### What is APPX File?
As you may see, when packaging and building the software with Electron Builder, you're given a `.appx` file if you haven't modify the package file yet.
The reason why we use a `.appx` file is because of the Microsoft Store on Windows 10. Microsoft Store only accepts .appx file, we can't just throw a .exe at it. On Windows 10’s Anniversary Update, Microsoft added a new “App Installer” tool that allows you to install .Appx or .AppxBundle applications graphically. To install them, just double-click a .Appx or .AppxBundle package.

You can only install .Appx or .AppxBundle software if sideloading is enabled on your Windows 10 device.
To check if sideloading is enabled, head to Settings > Update & Security > For Developers. Ensure the setting here is set to either “Sideload apps” or “Developer mode”. If it’s set to “Windows Store apps”, you won’t be able to install .Appx or .AppxBundle software from outside the Windows Store.
New Windows 10 “Universal apps” or “Universal Windows Platform” apps are distributed in .Appx or .AppxBundle files. These are application packages that include the name, description, and permissions of an app along with the application’s binaries. Windows can install and uninstall these packages in a standard fashion, so developers don’t have to write their own installers. Windows can handle everything in a consistent way, allowing it to cleanly uninstall applications with no leftover registry entries. If a developer makes a .Appx program, you normally don’t download and install it directly. Instead, you visit the Windows Store, search for the program you want to install, and download it from the Store. All software in the Windows Store is in .Appx or .AppxBundle format behind the scenes. In some cases, you may need to install a .Appx or .AppxBundle package from outside the Store. For example, your workplace may provide an application you need in .Appx format, or you may be a developer who needs to test your own software before uploading it to the Store.

Most of this information was provided by [HowToGeeks](https://www.howtogeek.com/285410/how-to-install-.appx-or-.appxbundle-software-on-windows-10/)

### As for the question above, how do I get a EXE file instead of a APPX file?
If you're not on a Windows 10 operating system, you can still get a EXE file when building the software.
In the __package.json__ file, look for the build area, then simply change `appx` to `nsis`.
[Learn more about NSIS](https://www.electron.build/configuration/nsis) for Electron Builder.

### Why Include Font Awesome in the Files? You could just use a script?
Yes, a simple line of code could of added Font Awesome to the software.
The reason why I choice to add it was for offline use, in case the user goes offline the icons would still load for them.

### Why Electron?
I'm mostly experienced with web code and have gained a lot of experience mostly in Electron in the past two years.
So I take advantage of my skill set by using Electron.

## Building
### Requirements

You're required to have the following in order to build FalixNodes Software:
 - [Python](https://www.python.org/downloads/) v3.6 or later
 - [Visual C++ Redistributable](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0)
 - [Node](https://nodejs.org/en/download/) v12 or later

### Install Packages
```
git clone https://github.com/FalixNodes-Software/Desktop-App/
cd Desktop-App
npm install electron@9.4.3
npm install glasstron
npm install electron-builder
```
Please only use Electron v9.0.0 - v9.4.3 or variables will be undefined.

### Running
To start running the software, use:
```
npm start
```
### Packaging
To create a package of the software, use:
```
npm build
```
