module.exports = (app) => {
    app.on("issues.opened", async (context) => {
        // If new issues shows up
        context.log.info(context.payload);

        // github API Calls
        const params = context.issue({ body: "Hello World" });
        // post a comment
        return context.octokit.issues.createComment(params);
    });``
};
