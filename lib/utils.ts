export function getEnvVariables<T extends Array<string>>(...variables: T):
    Record<T[number], string> {
    const data: Record<string, string> = {};

    variables.forEach(
        (variable) => {
            const item = process.env[variable];
            if (!item) {
                throw new Error(`Please setup environment variable: ${variable}`)
            }
            data[variable] = item;
        }
    );

    return data as Record<T[number], string>;
}
