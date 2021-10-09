# Lightroom Catalog and Folder Structure Migration Script

- The purpose of this script is to copy all `.lrcat` files from a `source` to a `target` while mapping the folder structure 1:1 from the `source` to the `target`. The Node script will walk the entire folder structure from the given `source`, recursively, to the bottom of the tree creating a new folder at the `target` for each new folder encountered and while copying all files with the extension of `.lrcat`

## Background

- After switching from a DAS to a NAS to store photography, the NAS does not allow launching Lightroom's native `.lrcat` file directly from the NAS device. The solution is to copy all Lightroom Catalogs to a new hard drive and map them back to the actual image source on the NAS where the files are redundantly stored. While the NAS offers redundant storage, keeping the Lightroom Catalogs on an external hard drive offers the ability to launch catalogs, make edits, and access the files in Lightroom without keeping all of the data on your local machine. The copying of the full folder structure reduces cognitive overhead when searching for files between the original source of truth (the NAS) and wherever the target destination may live.

## Usage

1. `git clone` the repo
2. `npm i`
3. Open the project in your text editor of choice
4. Input your `source` and `target` in the `lrcatMigation(source, target)` function call
   - Example `lrcatMigration('./source', '/../documents/target');`
5. Run `node index.js`

## Built with

- [ncp](https://www.npmjs.com/package/ncp)
- [Node fs](https://nodejs.org/api/fs.html)

### Sample Folder Structure

- _Note: All folders will be copied but the only significant data copied comes from the `.lrcat` files_

```
photography/
├─ clients/
│  ├─ advertising_agency/
│  │  ├─ client_one/
│  │  │  ├─ job_name/
│  │  │  │  ├─ job_name.lrcat
│  │  │  │  ├─ raw/
│  │  │  │  ├─ jpg/
│  │  ├─ client_two/
│  │  │  ├─ job_name/
│  │  │  │  ├─ job_name.lrcat
│  │  │  │  ├─ raw/
│  │  │  │  ├─ jpg/
│  ├─ magazine_one/
│  │  │  ├─ job_name/
│  │  │  │  ├─ job_name.lrcat
│  │  │  │  ├─ raw/
│  │  │  │  ├─ jpg/
│  │  │  ├─ job_name/
│  │  │  │  ├─ job_name.lrcat
│  │  │  │  ├─ raw/
│  │  │  │  ├─ jpg/
├─ personal/
│  ├─ travel/
│  │  ├─ 211007_destination/
│  │  │  ├─ 211007_destination.lrcat
│  │  │  ├─ raw/
│  │  │  ├─ jpg/
│  ├─ projects/
│  │  ├─ 190214_project/
│  │  │  ├─ 211007_project.lrcat
│  │  │  ├─ raw/
│  │  │  ├─ jpg/
```
