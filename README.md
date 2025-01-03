# react 组件调试
在vscode左侧的调试栏中，点击添加配置，选择chrome，然后在生成的launch.json中添加如下配置
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
然后在vscode中按F5启动调试，就可以在vscode中调试react组件了

在源代码文件中可以增加断点，除了普通断点 还有三种条件类型断电：
- 条件断点：在代码行号上右键，选择Add Conditional Breakpoint，可以在代码行上增加一个条件断点
- 日志断点：在代码行号上右键，选择Add Logpoint，可以在代码行上增加一个日志断点
- 命中次数：在代码行号上右键，选择Add Hit Count Breakpoint，可以在代码行上增加一个counter断点

对于launch.json中的userDirData属性，默认跑浏览器的时候会创建一个临时文件夹，所以没有之前的用户数据，也就没有之前安装的 React DevTools 等插件。可以在launch.json中添加如下配置
```
"userDataDir": false
```
关掉别的浏览器再跑，这时候就是在默认 userDataDir 跑的，各种用户的数据都有。