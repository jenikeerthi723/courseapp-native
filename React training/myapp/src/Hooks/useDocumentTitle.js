import React, {useEffect,useDebugValue} from 'react';  

export const useDocumentTitle = title => {
    const date = new Date();
    useDebugValue(date, date => date.toString());
    useEffect(() => {
      document.title = title;
    }, [title])
  }

  export default useDocumentTitle;
  