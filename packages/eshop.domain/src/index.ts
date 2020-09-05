interface App {
    start: boolean;
    tst: boolean;
}

export default function startup(): App {
    return {
        start: true,
        tst: false
    };
}