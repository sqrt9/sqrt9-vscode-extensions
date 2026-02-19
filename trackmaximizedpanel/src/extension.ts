
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let opened = false;

	context.subscriptions.push(vscode.commands.registerCommand('trackmaximizedpanel.maximize', () => {
		if (opened === false) {
			opened = true;
			vscode.commands.executeCommand("workbench.action.toggleMaximizedPanel");
		};
	}));

	context.subscriptions.push(vscode.commands.registerCommand("trackmaximizedpanel.minimize", () => {
		if (opened === true) {
			opened = false;
			vscode.commands.executeCommand("workbench.action.toggleMaximizedPanel");
		};
	}));
}

export function deactivate() {}
