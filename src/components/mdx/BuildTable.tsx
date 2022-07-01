import React from "react";

const versions = {
  0: "0.3.0",
  1: "0.6.0",
  2: "0.7.0",
  3: "0.7.1",
  4: "0.8.0",
  5: "0.8.1.1",
  6: "0.8.3.1",
};

type BuildProperty = {
  name: string;
  type: "single" | "boolean" | "version" | "side" | "array";
  description: JSX.Element;
  version: number;
  defaultValue: JSX.Element;
};

const properties: BuildProperty[] = [
  {
    name: "dllReferences",
    type: "array",
    description: (
      <>
        Your mod's external assembly references. <br />
        These use a root path of <code>/mod-folder/lib/</code>, meaning the
        given paths point to files only in that <code>/lib/</code> folder.
        <br />
        If, for example, you have a DLL called <code>MyDLL.dll</code> and
        another called <code>Library.dll</code>, <code>dllReferences</code>{" "}
        would be set to <code>MyDLL.dll, Library.dll</code>.
        <br />
        <br />
        <strong>THE FOLLOWING INFORMATION APPLIES ONLY TO 1.3:</strong> If you
        have a DLL that references XNA/FNA and need to supply a library for both
        targets due to cross-OS compatibility, you must name your XNA dll{" "}
        <code>Whatever.dll</code> and your FNA DLL <code>Whatever.FNA.dll</code>
        . In 1.4, this is no longer supported as XNA has been phased out in
        favor of FNA for all builds.
      </>
    ),
    version: 0,
    defaultValue: <>Empty array.</>,
  },
  {
    name: "modReferences",
    type: "array",
    description: (
      <>
        Your mod's references to other mods. Each entry uses the mod's internal
        name (i.e. <code>CalamityMod, ThoriumMod</code>).
        <br />
        You can append <code>@x.x.x</code> to specify the minimum version of a
        mod (i.e. <code>CalamityMod@2.0.0.1</code>). If the loaded mod does not
        match this version, your mod will not load either.
      </>
    ),
    version: 0,
    defaultValue: <>Empty array.</>,
  },
  {
    name: "weakReferences",
    type: "array",
    description: (
      <>
        Weakly-referenced mods. Allows you to reference mods without needing to
        strongly depend on them. You can reference this mod's assembly, compile
        while referencing it, etc. like a strongly-referenced mod, but your mod
        will be able to be enabled without the weakly-referenced mods being
        enabled. This requires extreme care as you can run into issues where
        your mod tries to use a weakly-referenced mod's assembly when the mod
        weakly-referenced isn't loaded. Use internal mod names for elements.
      </>
    ),
    version: 6,
    defaultValue: <>Empty array.</>,
  },
  {
    name: "sortAfter",
    type: "array",
    description: (
      <>
        Allows you to specify what mods your mod should load after. Use internal
        mod names for elements.
      </>
    ),
    version: 6,
    defaultValue: <>Empty array.</>,
  },
  {
    name: "sortBefore",
    type: "array",
    description: (
      <>
        Allows you to specify what mods your mod should load before. Use
        internal mod names for elements.
      </>
    ),
    version: 6,
    defaultValue: <>Empty array.</>,
  },
  {
    name: "buildIgnore",
    type: "array",
    description: (
      <>
        A list of files to ignore. Supports some regex-powered syntax,
        functionally similar to <code>.gitignore</code> files. Any files listed
        will not be packed into the compiled mod file.
      </>
    ),
    version: 3,
    defaultValue: (
      <>
        Empty array. If unspecified, ignores <code>build.txt</code>, files and
        folders beginning with <code>.</code>, <code>bin/</code>,{" "}
        <code>obj/</code>, and <code>Thumbs.db</code>. All <code>.csproj</code>,{" "}
        <code>.cs</code>, and <code>.sln</code> files will be excluded if{" "}
        <code>includeSource</code> is false.
      </>
    ),
  },
  {
    name: "author",
    type: "single",
    description: (
      <>
        The author is just a string, but you can use commas and whatnot to list
        multiple people. It has no programmatical signifigance, and is just
        displayed on the Mod Browser and Mods List.
      </>
    ),
    version: 0,
    defaultValue: <>None (mod skeleton provides the author name you input).</>,
  },
  {
    name: "version",
    type: "version",
    description: (
      <>
        Your mod's version. This must be incremented every update.
        <br />
        There is no standardized scheme for versions, many mods keep their{" "}
        <code>major</code> the same, while incrementing <code>minor</code> for
        major updates, <code>patch</code> for smaller updates, and{" "}
        <code>revision</code> for hotfixes and tweaks.
        <br />
        If you would like to use a more recognized version scheme, you can abide
        by <a href="https://semver.org/">Semantic Versioning 2.0.0</a>, though
        its usage holds little signififance as tModLoader does not recognize
        SemVer and has no support for proper library management.
      </>
    ),
    version: 0,
    defaultValue: <>None (mod skeleton provides the version you input).</>,
  },
  {
    name: "displayName",
    type: "single",
    description: (
      <>
        Your mod's display name. This is shown in various places, and is the
        name your mod goes by when seen by players. It is separate from your
        internal name.
      </>
    ),
    version: 0,
    defaultValue: <>None (mod skeleton provides the display name you input).</>,
  },
  {
    name: "noCompile",
    type: "boolean",
    description: (
      <>
        <strong>
          WARNING: This property is advanced and will not apply to 99% of mods.
          If you feel you need this, consult someone knowledgeable on the matter
          before using it.
        </strong>
        <br />
        Whether the mod's project should be compiled when building a mod. If
        false, pre-compiled DLLs by the mod author will be used instead.
        Starting from 1.4, only one DLL will be searched for, "
        <code>YourModName.dll</code>". This DLL will be used instead of
        compiling a mod project.
        <br />
        <strong>THE FOLLOWING INFORMATION APPLIES ONLY TO 1.3:</strong> 1.3 has
        more complicated DLL resolution. If your mod does not directly reference
        types from XNA/FNA, your DLL should be named <code>All.dll</code>. If
        your mod references XNA/FNA types, you need a <code>Windows.dll</code>{" "}
        file (referencing XNA) and a <code>Mono.dll</code> file (referencing FNA
        and a FNA version of Terraria).
      </>
    ),
    version: 1,
    defaultValue: <>False</>,
  },
  {
    name: "hideCode",
    type: "boolean",
    description: (
      <>
        If true, users may unpack your mod through tModLoader to get the
        compiled DLL files of your mod. This must be set to true for source code
        to be packed as well with <code>incluedSource</code>.
      </>
    ),
    version: 2,
    defaultValue: <>False</>,
  },
  {
    name: "hideResources",
    type: "boolean",
    description: (
      <>
        If true, resource files (<code>.png</code>, <code>.wav</code>,{" "}
        <code>.rawimg</code>, etc.) will not be unpacked when a user attempts to
        unpack your mod through tModLoader.
      </>
    ),
    version: 2,
    defaultValue: <>False</>,
  },
  {
    name: "includeSource",
    type: "boolean",
    description: (
      <>
        If true, the actual source code of your mod will be packed into the
        compiled mod file and will be unpacked when a user attempts to unpack
        your mod through tModLoader.
      </>
    ),
    version: 2,
    defaultValue: <>False</>,
  },
  {
    name: "includePDB",
    type: "boolean",
    description: (
      <>
        <strong>
          As of{" "}
          <a href="https://github.com/tModLoader/tModLoader/pull/1086">
            TML-1096
          </a>{" "}
          (more broadly, as of tModLoader 1.4), this property is no longer used.
        </strong>
        Whether your mod's <code>.pdb</code> file should be included. Helpful
        for debugging, but bloats compiled mod file size. May cause some
        undocumented issues, but is generally good to include.
      </>
    ),
    version: 4,
    defaultValue: <>True</>,
  },
  {
    name: "languageVersion",
    type: "single",
    description: (
      <>
        <strong>
          DEPRECATED; THIS APPLIES TO OUTDATED VERSIONS OF tModLoader ONLY.
        </strong>
        <br />
        The C# language version to compile with from tModLoader. Ignored when
        building through your project.
      </>
    ),
    version: 4,
    defaultValue: <>Unused.</>,
  },
  {
    name: "homepage",
    type: "single",
    description: (
      <>
        An openable link pointing to your mod's homepage. This can be accessed
        from the Mod Browser, Steam Workshop (1.4 only), and Mods List.
      </>
    ),
    version: 2,
    defaultValue: <>Empty string. Results in no homepage button.</>,
  },
  {
    name: "modSide",
    type: "side",
    description: (
      <>
        The mod's network side. See the full article on mod sides
        <a href="/docs/tmodloader/net/modside">here</a>.
      </>
    ),
    version: 5,
    defaultValue: <>Both</>,
  },
  {
    name: "",
    type: "single",
    description: <>&nbsp;</>,
    version: 9999,
    defaultValue: <>&nbsp;</>,
  },
];

export default function BuildTable({ version }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Default Value</th>
        <th>Version Added</th>
      </tr>
      <Versions version={version} />
    </table>
  );
}

function Versions({ version }) {
  const rows: JSX.Element[] = [];

  for (const property of properties) {
    if (property.version <= version) {
      rows.push(
        <tr key={property.name}>
          <td>
            <code>{property.name}</code>
          </td>
          <td>
            <code>{property.type}</code>
          </td>
          <td>{property.description}</td>
          <td>{property.defaultValue}</td>
          <td>{versions[property.version]}</td>
        </tr>
      );
    }
  }

  return <>{rows}</>;
}
