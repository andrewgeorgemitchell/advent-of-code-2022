export type PackCompartment = {
  rawPackContents: string;
  countedInventory: Record<string, number>;
};

export type Pack = {
  compartment1: PackCompartment;
  compartment2: PackCompartment;
  sharedItems: string[];
};
