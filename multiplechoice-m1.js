    set = "#module";

    // You have just witnessed a car accident. What do you think you should do FIRST after witnessing a crime or collision like this?
    $(set).find("input[name='question1']").on("click", function() {
        question = ".question1", right = ["a"], wrong1 = ["b"], wrong2 = ["c"], wrong3 = ["d"], selection = [];
        ConfigInstantQuiz(question);
        CheckResultsMP(set);
    });
