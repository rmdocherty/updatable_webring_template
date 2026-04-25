export const DynamicContent = () => {
  return (
    <div style={{ width: 700 }}>
      <p>
        This is the search page, where you can put whatever content you want! For example, you could have a list of
        books with links to buy them, or a list of datasets with links to download them. You can update this content by
        changing the json file in the content folder and redeploying the site (i.e. pushing to github pages).
      </p>
      <p>
        <a href="/">Go back</a>
      </p>
    </div>
  );
};
