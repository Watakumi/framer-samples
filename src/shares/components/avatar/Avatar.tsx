import * as RadixAvatar from "@radix-ui/react-avatar";
import "./Avatar.css";
interface Props {
  src: string;
  name: string;
}
export function Avatar({ src, name }: Props): JSX.Element {
  return (
    <>
      <RadixAvatar.Root className="AvatarRoot">
        <RadixAvatar.Image className="AvatarImage" src={src} />
        <RadixAvatar.Fallback className="AvatarFallback" delayMs={600}>
          {name}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    </>
  );
}
