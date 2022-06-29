import './search-box.styles.css';

/* Function type from React: */
import { ChangeEventHandler } from 'react'; 



/* Any = any possible type passed as an argument (**AVOID THE any KEYWORD**) */

/* Use lowercase primitives when defining types: */
  /* const name: string = '123'; */

/* TypeScripts cares about the types that are being outputted from a function: */
  /* Need to define the types for your parameters, and your return */
  /* If returning nothing, need to return void */
    /* const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => { return true} */
    /* const func: (a: string, b: number, c: boolean) => void = (a, b, c) => { } */

/* For Objects: */
/* If using more functional style of code, use Types.  For object oriented, use interfaces: */
  /* Type: 
    - allow us to do a 'union', which is a combination of types
  
    type SearchBoxProps = {
      className: string;
      placeholder?: string;
      onChangeHandler: (a: string) => void;
    }

    -e.g. a union

      type CanadianAddress = {
        street: string;
        provinced: string;
      }

      type USAddress = {
        street: string;
        state: string;
      }

      type NorthAmericanAddress = CanadianAddress | USAddress;

      const Address: NorthAmericanAddress = {
        street: 'adas',
        state: 'adasd'
      }
  
  
  */



  /* Interface :
    - extendable and similar to class components
    - the ? is an optional property that lets you expect a type or null
    - by extending an interface to another, you get access to the other props that are on the other
  */
      /* interface ISearchBoxProps extends IChangeHandlerProps {
        className: string;
        placeholder?: string;
      }

      interface IChangeHandlerProps {
        onChangeHandler: (a: string) => void
      } */

  /* You can also combine via overloading, which is typing out the interface again with additional props: */
    /* interface ISearchBoxProps {
      className: string;
      placeholder?: string;
    }

    interface ISearchBoxProps {
      onChangeHandler: (a: string) => void
    } */

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

/* NEED to reference docs to figure out types */

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
