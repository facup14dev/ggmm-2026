type Props = {
  compact?: boolean;
};

type Node = {
  label: string;
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
};

type Satellite = {
  label: string;
  x: number;
  y: number;
};

const coreNodes: Node[] = [
  {
    label: "Directivos",
    x: 50,
    y: 13,
    size: "md",
  },
  {
    label: "Administración\nTributaria",
    x: 72,
    y: 18,
    size: "lg",
  },
  {
    label: "Administración\nFinanciera",
    x: 84,
    y: 38,
    size: "lg",
  },
  {
    label: "Administración\nContable",
    x: 82,
    y: 64,
    size: "lg",
  },
  {
    label: "Catastro",
    x: 68,
    y: 82,
    size: "md",
  },
  {
    label: "Acción\nSocial",
    x: 48,
    y: 89,
    size: "md",
  },
  {
    label: "Atención\nal Vecino",
    x: 29,
    y: 80,
    size: "md",
  },
  {
    label: "Turismo",
    x: 18,
    y: 61,
    size: "sm",
  },
  {
    label: "RRHH",
    x: 17,
    y: 39,
    size: "sm",
  },
  {
    label: "Rodados",
    x: 29,
    y: 19,
    size: "lg",
  },
];

const satelliteNodes: Satellite[] = [
  {
    label: "Autogestión\nde proveedores",
    x: 50,
    y: 3,
  },
  {
    label: "Autogestión de\ncontribuyentes",
    x: 91,
    y: 19,
  },
  {
    label: "Cobranza\nelectrónica",
    x: 94,
    y: 51,
  },
  {
    label: "Multa\ndigital",
    x: 89,
    y: 84,
  },
  {
    label: "Estacionamiento\ndigital",
    x: 51,
    y: 97,
  },
  {
    label: "Reportes\ninteligentes (BI)",
    x: 8,
    y: 83,
  },
  {
    label: "Catastro\nGIS",
    x: 5,
    y: 52,
  },
  {
    label: "App para\nSugit y Sucerp",
    x: 9,
    y: 20,
  },
];

function GgmmNetworkDiagram({
  compact = false,
}: Props) {
  const centralSize = compact ? 92 : 118;

  const getCoreClasses = (
    size: Node["size"],
  ) => {
    if (compact) {
      if (size === "lg") {
        return "h-[76px] w-[76px] text-[8px]";
      }

      if (size === "md") {
        return "h-[64px] w-[64px] text-[8px]";
      }

      return "h-[50px] w-[50px] text-[7px]";
    }

    if (size === "lg") {
      return "h-24 w-24 text-[10px]";
    }

    if (size === "md") {
      return "h-20 w-20 text-[9px]";
    }

    return "h-16 w-16 text-[8px]";
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden">
      {/* Líneas */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {coreNodes.map((node) => (
          <line
            key={`core-${node.label}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#b62037"
            strokeWidth="1.1"
            opacity="0.55"
          />
        ))}

        {satelliteNodes.map((node) => (
          <line
            key={`satellite-${node.label}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#998f87"
            strokeWidth="0.7"
            strokeDasharray="2 2"
            opacity="0.45"
          />
        ))}

        <circle
          cx="50"
          cy="50"
          r="31"
          fill="none"
          stroke="#ddd3c6"
          strokeWidth="0.6"
        />

        <circle
          cx="50"
          cy="50"
          r="23"
          fill="none"
          stroke="#e2d8cc"
          strokeWidth="0.6"
        />

        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="#e9e0d6"
          strokeWidth="0.6"
        />
      </svg>

      {/* Centro */}
      <div
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#b62037] shadow-[0_10px_25px_rgba(80,20,30,0.18)]"
        style={{
          width: centralSize,
          height: centralSize,
        }}
      >
        <div className="flex h-full items-center justify-center">
          <span
            className={`font-serif font-black tracking-[-0.08em] text-white ${
              compact
                ? "text-[44px]"
                : "text-6xl"
            }`}
          >
            gm
          </span>
        </div>
      </div>

      {/* Módulos principales */}
      {coreNodes.map((node) => (
        <div
          key={node.label}
          className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#bd223a] px-1.5 text-center font-bold uppercase leading-[1.05] text-white shadow-[0_5px_14px_rgba(80,30,30,0.16)] ${getCoreClasses(
            node.size,
          )}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <div className="flex h-full items-center justify-center whitespace-pre-line">
            {node.label}
          </div>
        </div>
      ))}

      {/* Herramientas satélite */}
      {satelliteNodes.map((node) => (
        <div
          key={node.label}
          className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#999] bg-[#f6f4ef] px-1 text-center font-bold leading-[1.05] text-[#b62037] shadow-sm ${
            compact
              ? "h-[48px] w-[48px] text-[6px]"
              : "h-[62px] w-[62px] text-[7px]"
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <div className="flex h-full items-center justify-center whitespace-pre-line">
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GgmmNetworkDiagram;