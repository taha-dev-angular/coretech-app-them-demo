import { Injectable } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { compactNavigation, defaultNavigation, futuristicNavigation, horizontalNavigation } from 'app/mock-api/common/navigation/data';
import { cloneDeep } from 'lodash-es';
import { NgxRolesService } from 'ngx-permissions';
interface NavObject {
  id: string;
  title: string;
  type: string;
  icon: string;
  link: string;
  children?: NavObject[];
}
@Injectable({ providedIn: 'root' })
export class NavigationMockApi {
  private readonly _compactNavigation: FuseNavigationItem[] = compactNavigation;
  private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
  private readonly _futuristicNavigation: FuseNavigationItem[] = futuristicNavigation;
  private readonly _horizontalNavigation: FuseNavigationItem[] = horizontalNavigation;

  /**
   * Constructor
   */
  constructor(private _fuseMockApiService: FuseMockApiService, private rolesService: NgxRolesService) {
    // Register Mock API handlers
    this.registerHandlers();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods





  filterTreeByIds3(navigation: FuseNavigationItem[], ids: string[]): FuseNavigationItem[] {
    const filteredTree: FuseNavigationItem[] = [];
    const processedIds = new Set<string>();

    const traverse = (node: FuseNavigationItem, parent?: FuseNavigationItem) => {
      if (ids.includes(node.id)) {
        const newNode: FuseNavigationItem = { ...node };
        if (newNode.children) {
          newNode.children = newNode.children.filter(child => ids.includes(child.id));
        }

        if (!processedIds.has(newNode.id)) {
          processedIds.add(newNode.id);
          if (parent) {
            const newParent: FuseNavigationItem = { ...parent };
            newParent.children = [newNode];
            filteredTree.push(newParent);
          } else {
            filteredTree.push(newNode);
          }
        }
      }

      if (node.children) {
        node.children.forEach(child => traverse(child, node));
      }
    };

    navigation.forEach(node => traverse(node));

    return filteredTree;
  }


  // -----------------------------------------------------------------------------------------------------

  /**
   * Register Mock API handlers
   */
  registerHandlers(): void {
    // -----------------------------------------------------------------------------------------------------
    this._fuseMockApiService.onGet('api/common/navigation').reply(() => {
      let navigation: FuseNavigationItem[] = [];


      let page_permissions = <string[]>this.rolesService
        .getRole('pages').validationFunction


      navigation = this._defaultNavigation;
      const array_filter = this.filterTreeByIds3(this._defaultNavigation, page_permissions);

      console.log(array_filter);

      console.log(navigation);





      // Return the response
      return [
        200,
        {
          // default: cloneDeep(array_filter),
          default: cloneDeep(navigation),
        },
      ];
    });
    // @ Navigation - GET
    // -----------------------------------------------------------------------------------------------------
    // this._fuseMockApiService
    //     .onGet('api/common/navigation')
    //     .reply(() =>
    //     {
    //         // Fill compact navigation children using the default navigation
    //         this._compactNavigation.forEach((compactNavItem) =>
    //         {
    //             this._defaultNavigation.forEach((defaultNavItem) =>
    //             {
    //                 if ( defaultNavItem.id === compactNavItem.id )
    //                 {
    //                     compactNavItem.children = cloneDeep(defaultNavItem.children);
    //                 }
    //             });
    //         });

    //         // Fill futuristic navigation children using the default navigation
    //         this._futuristicNavigation.forEach((futuristicNavItem) =>
    //         {
    //             this._defaultNavigation.forEach((defaultNavItem) =>
    //             {
    //                 if ( defaultNavItem.id === futuristicNavItem.id )
    //                 {
    //                     futuristicNavItem.children = cloneDeep(defaultNavItem.children);
    //                 }
    //             });
    //         });

    //         // Fill horizontal navigation children using the default navigation
    //         this._horizontalNavigation.forEach((horizontalNavItem) =>
    //         {
    //             this._defaultNavigation.forEach((defaultNavItem) =>
    //             {
    //                 if ( defaultNavItem.id === horizontalNavItem.id )
    //                 {
    //                     horizontalNavItem.children = cloneDeep(defaultNavItem.children);
    //                 }
    //             });
    //         });

    //         // Return the response
    //         return [
    //             200,
    //             {
    //                 compact   : cloneDeep(this._compactNavigation),
    //                 default   : cloneDeep(this._defaultNavigation),
    //                 futuristic: cloneDeep(this._futuristicNavigation),
    //                 horizontal: cloneDeep(this._horizontalNavigation),
    //             },
    //         ];
    //     });


  }
}
