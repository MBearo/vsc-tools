// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	var thisProvider = {
		resolveWebviewView: function (webviewView: vscode.WebviewView) {
			webviewView.webview.options = { enableScripts: true };
			webviewView.webview.html = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Document</title>
			</head>
			<body>
				hahahaha
				<button>aaaa</button
			</body>
			</html>
			`;
		}
	};
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("xTools.Webview", thisProvider)
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
