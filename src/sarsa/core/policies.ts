const softmaxFactor = 2;

export const greedy = (Q: number[]) => {
    let max = -Infinity;
    let maxIdx: number[] = [];
    for (let i = 0; i < Q.length; i++) {
        if (Q[i] > max) {
            maxIdx = [i];
            max = Q[i];
        } else if (Q[i] == max) {
            maxIdx.push(i);
        }
    }

    if (maxIdx.length == 1) return maxIdx[0];
    return maxIdx[Math.floor(Math.random() * maxIdx.length)];
};

export const epsilonGreedy = (epsilon: number, Q: number[]) => {
    if (Math.random() < epsilon) {
        return Math.floor(Math.random() * Q.length);
    }
    return greedy(Q);
};

export const softmax = (Q: number[]) => {
    let total = 0;
    for (let i = 0; i < 4; i++) {
        total += Math.exp(softmaxFactor * Q[i]);
    }

    const r = Math.random();
    let cumsum = 0;
    for (let i = 0; i < 4; i++) {
        cumsum += Math.exp(softmaxFactor * Q[i]) / total;
        if (cumsum >= r) {
            return i;
        }
    }
    return 3;
};
