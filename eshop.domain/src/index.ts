interface App {
    start: boolean;
    tst: boolean;
}

export default function startup(): App {
    return {
        start: false,
        tst: true
    };
}