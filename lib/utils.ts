interface EnvVariableI {
    name: string,
    label: string,
};

export function getEnvVariables<const T extends Array<EnvVariableI>>(...variables: T){
    const data: Record<string, string> = {};

    variables.forEach(
        (variable) => {
            const item = process.env[variable.name];
            if (!item) {
                throw new Error(`Please setup environment variable: ${variable.name}`)
            }
            data[variable.label] = item;
        }
    );

    return data as Record<T[number]['label'], string>;
}