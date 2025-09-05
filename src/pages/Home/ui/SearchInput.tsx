import { Input } from "antd";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "search...",
}: SearchInputProps) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={<Search size={16} className="text-gray-400" />}
      value={value}
      onChange={onChange}
      allowClear
    />
  );
};

export default SearchInput;
