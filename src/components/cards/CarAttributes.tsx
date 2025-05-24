import { CAR_ATTRIBUTES } from "@/lib/constance";

interface CarAttributesProps {
  attributes: Record<string, string>;
}

const CarAttributes = ({ attributes }: CarAttributesProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-y border-gray-200 py-3">
      {CAR_ATTRIBUTES.map((attr) => (
        <div key={attr.id} className="flex items-center gap-2">
          <attr.icon className="text-cc-red text-xl" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">{attr.label}</span>
            <span className="text-base font-medium">
              {attributes[attr.id] || 'N/A'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarAttributes;