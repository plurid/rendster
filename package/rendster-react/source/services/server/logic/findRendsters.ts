// #region imports
    // #region libraries
    import fs from 'fs';
    import path from 'path';
    // #endregion libraries
// #endregion imports



// #region module
export interface File extends fs.Dirent {
    path: string;
}

async function* getFiles(
    path = './',
): AsyncGenerator<File> {
    const entries = fs.readdirSync(
        path,
        {
            withFileTypes: true,
        },
    );

    for (let file of entries) {
        if (file.isDirectory()) {
            yield* getFiles(`${path}${file.name}/`);
        } else {
            yield {
                ...file,
                path: path + file.name,
            } as File;
        }
    }
}

export const findFilesInDirectory = async (
    directory: string,
): Promise<string[]> => {
    const files: string[] = [];

    const resolvedDirectory = directory.endsWith('/')
        ? directory
        : directory + '/';

    for await (const file of getFiles(resolvedDirectory)) {
        files.push(file.path);
    }

    return files;
}


export const findRendstersInDirectory = async (
    directory: string,
    extension: string,
): Promise<string[] | undefined> => {
    try {
        const resolvedPath = path.isAbsolute(directory)
            ? directory
            : path.join(process.cwd(), directory);

        const stats = fs.statSync(resolvedPath);
        if (!stats.isDirectory) {
            return;
        }

        const rendsters: string[] = [];

        const files = await findFilesInDirectory(
            resolvedPath,
        );

        for (const file of files) {
            if (file.endsWith(extension)) {
                rendsters.push(file);
            }
        }

        return rendsters;
    } catch (error) {
        return;
    }
}


export const findRendsters = async (
    source: string[],
    extension: string,
): Promise<string[]> => {
    const rendsters: string[] = [];

    for (const directory of source) {
        const directoryRendsters = await findRendstersInDirectory(
            directory,
            extension,
        );
        if (!directoryRendsters) {
            continue;
        }

        rendsters.push(
            ...directoryRendsters,
        );
    }

    return rendsters;
}
// #endregion module
