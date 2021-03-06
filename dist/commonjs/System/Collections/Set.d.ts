import { ISymbolizable } from "./Dictionaries/IDictionary";
import { HashSet } from "./HashSet";
import { Primitive } from "../Primitive";
import { IEnumerableOrArray } from "./IEnumerableOrArray";
export declare class Set<T extends Primitive | ISymbolizable | symbol> extends HashSet<T> {
    constructor(source?: IEnumerableOrArray<T>);
}
export default Set;
