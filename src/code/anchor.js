let code = {};

code.base = `
<template>
    <Anchor show-ink>
        <AnchorLink href="#basic_usage" title="Basic Usage" />
        <AnchorLink href="#static_position" title="Static Position" />
        <AnchorLink href="#API" title="API">
            <AnchorLink href="#Anchor_props" title="Anchor props" />
            <AnchorLink href="#Anchor_events" title="Anchor events" />
            <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
    </Anchor>
</template>
<script>
    export default {
        
    }
</script>
`;

code.affix = `
<template>
    <Anchor :affix="false" show-ink>
        <AnchorLink href="#basic_usage" title="Basic Usage" />
        <AnchorLink href="#static_position" title="Static Position" />
        <AnchorLink href="#API" title="API">
            <AnchorLink href="#Anchor_props" title="Anchor props" />
            <AnchorLink href="#Anchor_events" title="Anchor events" />
            <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
    </Anchor>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;