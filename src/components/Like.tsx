type Props = {
  likes: number;
  onLike: () => void;
};

export const Like = ({ likes, onLike }: Props) => {
  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={onLike}>UpVote</button>
    </div>
  );
};
