import '@logseq/libs'

/**
 * main entry
 */
async function main() {
    logseq.Editor.registerSlashCommand(
        'sw', async () => {
            await logseq.Editor.insertAtEditingCursor(
        `#+BEGIN_QUOTE
         hello!
        #+END_QUOTE`,
            );
        },
    )
}

// bootstrap
logseq.ready(main).catch(console.error)
