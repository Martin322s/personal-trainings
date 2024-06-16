function constructionCrew(worker) {
    let isDizzy = worker.dizziness;

    if (isDizzy) {
        worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    } else {
        return worker;
    }

    return worker;
}