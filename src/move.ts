// Please update this type as same as with the data shape.

type File = { id: string; name: string };

type ListItem = {
  id: string;
  name: string;
  files: File[];
};

type List = ListItem[];

export default function move(list: List, source: string, destination: string): List {
  const sourceItem = list.find((folder) => folder.files.find((file) => file.id === source));
  const destinationItem = list.find((folder) => folder.id === destination);
  const sourceFile = sourceItem && sourceItem.files.find((file) => file.id === source);
  const sourceItemIndex = list.indexOf(sourceItem!);

  sourceItem && sourceItem.files.splice(sourceItemIndex, 1);

  destinationItem && destinationItem.files.push(sourceFile!);

  list.push(sourceItem!, destinationItem!);

  return list;
}
