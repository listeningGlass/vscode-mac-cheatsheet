const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('VS Code Cheat Sheet for Mac.showCheatSheet', function () {
        const panel = vscode.window.createWebviewPanel(
            'showCheatSheet',
            'VS Code Cheat Sheet for Mac',
            vscode.ViewColumn.One,
            {
                enableScripts: true
            }
        );
        
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>VS Code Cheat Sheet for Mac</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                padding: 20px;
                line-height: 1.6;
            }
            .content-section {
                margin-bottom: 30px;
            }
            .content-section h2 {
                color: var(--vscode-editor-foreground);
                border-bottom: 1px solid var(--vscode-widget-border);
                padding-bottom: 5px;
            }
        </style>
    </head>
    <body>
        <h1>VS Code Cheat Sheet for Mac</h1>
        <div class="content-section">
            <h2>Section 1</h2>
            <p>Your content here</p>
        </div>
    </body>
    </html>`;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
