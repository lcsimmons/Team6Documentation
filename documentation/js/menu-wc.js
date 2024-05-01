'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pos-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' : 'data-bs-target="#xs-components-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' :
                                            'id="xs-components-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                            <li class="link">
                                                <a href="components/AddEmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddEmployeeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddOrderDialogComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddOrderDialogComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CashierCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CashierCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CashierCheckoutViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CashierCheckoutViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CashierCustomizeItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CashierCustomizeItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CashierMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CashierMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerCheckoutViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerCheckoutViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerCustomizeItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerCustomizeItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditEmployeeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditEmployeeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExcessReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExcessReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagerEditIngredientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagerEditIngredientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagerEditMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagerEditMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagerViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagerViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuBoardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuBoardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPopularityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuPopularityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductUsageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductUsageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveOrderItemsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveOrderItemsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestockReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestockReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalesReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SellTogetherReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SellTogetherReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrevorCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrevorCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrevorCashierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrevorCashierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrevorCheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrevorCheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrevorCustomizeItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrevorCustomizeItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewCustomizationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewCustomizationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' : 'data-bs-target="#xs-directives-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' :
                                        'id="xs-directives-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                        <li class="link">
                                            <a href="directives/LogoutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' :
                                        'id="xs-injectables-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' : 'data-bs-target="#xs-pipes-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' :
                                            'id="xs-pipes-links-module-AppModule-e50a45b2eb981069461548a36001ffcb96d11b84a999f9cf37c11ecefedd4634c3536c64e3b23163bd19eb9ac98033aa84a7230c6fffd0b8fc41977188603d2d"' }>
                                            <li class="link">
                                                <a href="pipes/BionicReadingPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BionicReadingPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterByCategoryPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterByCategoryPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/OrderEditDialogComponent.html" data-type="entity-link" >OrderEditDialogComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Employee-1.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ingredient.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ingredient-1.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ingredient-2.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InventoryItem.html" data-type="entity-link" >InventoryItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemId.html" data-type="entity-link" >ItemId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemId-1.html" data-type="entity-link" >ItemId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemId-2.html" data-type="entity-link" >ItemId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-1.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-2.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-3.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-4.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-5.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem-6.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SellTogetherData.html" data-type="entity-link" >SellTogetherData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SellTogetherData-1.html" data-type="entity-link" >SellTogetherData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link" >Window</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});