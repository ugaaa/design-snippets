import { TagType } from "@/types/tags";
import Link from "next/link";

export const Tag = ({ tag }: { tag: TagType }) => (
  <Link
    href={`/blog/tags/${tag.id}`}
    style={{ display: "block", fontSize: "0.75rem" }}
  >
    #{tag.attributes.name}
  </Link>
);

const Tags = ({ tags }: { tags: TagType[] }) => {
  if (tags.length === 0) return;
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "10px",
        rowGap: "5px",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {tags.map((tag) => (
        <li key={`tag-${tag.id}`}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
};

export default Tags;
