import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguageData } from "../features/language/languageSlice";

const useLanguageData = () => {
  const dispatch = useDispatch();
  const { data, status, language, error } = useSelector(
    (state) => state.language
  );

  useEffect(() => {
    if (!data) {
      dispatch(fetchLanguageData(language));
    }
  }, [dispatch, language, data]);

  return { data, status, error };
};

export default useLanguageData;
