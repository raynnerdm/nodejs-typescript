import * as path from 'path';
import * as fs from 'fs';

export class Utility {

    private treatEachFile(file: string, pathDirectory: string, directory: string, fileList: Array<string>) {

        const newPath = path.join(directory, file);

        if (fs.statSync(path.join(pathDirectory, file)).isDirectory()) {

            fileList = this.readRecursiveDirectory(newPath, fileList);

        } else {

            fileList.push(newPath);
        }
    }

    public readRecursiveDirectory(directory: string, fileList?: Array<string>): Array<string> {

        let pathDirectory = path.join(process.cwd(), 'src', directory);
        let files = fs.readdirSync(pathDirectory);

        fileList = fileList || [];
        files.forEach((file) => this.treatEachFile(file, pathDirectory, directory, fileList));

        return fileList;
    }
}