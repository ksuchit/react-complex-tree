import { StaticTreeDataProvider, Tree, UncontrolledTreeEnvironment } from "react-complex-tree";
import { items } from "./dataProvider";
import { useState } from "react";

export default function ReactComplexTree() {
  
    const [focusedItem, setFocusedItem] = useState();
    const [expandedItems, setExpandedItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({ ...item, data: newName }))
    
    console.log('focusedItem',focusedItem)
    console.log('expandedItems',expandedItems)
    console.log('selectedItems',selectedItems)
    return (
        <>
            <style>{`
        :root {
          --rct-color-tree-bg: #F6F8FA;
          --rct-color-focustree-item-selected-bg: #e2d3d3;
          --rct-bar-color: none;
          --rct-color-focustree-item-focused-border: #d60303;
          --rct-color-focustree-item-draggingover-bg: #ecdede;
          --rct-color-focustree-item-draggingover-color: inherit;
          --rct-color-search-highlight-bg: #7821e2;
          --rct-color-drag-between-line-bg: #cf03d6;
          --rct-color-arrow: #b48689;
          --rct-item-height: 30px;
          --rct-arrow-size: 12px;
          --rct-arrow-container-size: 18px;
          --rct-color-focustree-item-hover-bg: #f7e6e6;

          --rct-search-width: 120px;
          --rct-search-height: 16px;
          --rct-search-padding: 8px;
          --rct-search-border: #b4b7bd;
          --rct-search-border-bottom: #0366d6;
          --rct-search-bg: #f8f9fa;
          --rct-search-text: #000000;
          --rct-search-text-offset: calc(var(--rct-search-padding) * 2 + 16px);
        }
      `}</style>
        <UncontrolledTreeEnvironment
        dataProvider={dataProvider}
        getItemTitle={item => item.data}
        viewState={{}}
        canDragAndDrop={true}
        canDropOnFolder={true}
        canReorderItems={true}
        canSearchByStartingTyping={true}
        canSearch={true}        
                
        onFocusItem={item => setFocusedItem(item.index)}
        onExpandItem={item => setExpandedItems([...expandedItems, item.index])}
        onCollapseItem={item =>
            setExpandedItems(expandedItems.filter(expandedItemIndex => expandedItemIndex !== item.index))
        }
        onSelectItems={items => setSelectedItems(items)}
            
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
        {/* <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" /> */}
         </UncontrolledTreeEnvironment>
        </>
  )
}
