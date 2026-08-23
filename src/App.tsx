/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Fabric, LegalModalType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { FabricDetailModal } from './components/FabricDetailModal';
import { FabricSearchModal } from './components/FabricSearchModal';
import { LegalModal } from './components/LegalModal';

// Pages
import { HomePage } from './pages/HomePage';
import { FabricsPage } from './pages/FabricsPage';
import { DenimPage } from './pages/DenimPage';
import { WholesalePage } from './pages/WholesalePage';
import { AboutPage } from './pages/AboutPage';
import { FacilityPage } from './pages/FacilityPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);
  const [contactPrefilledFabric, setContactPrefilledFabric] = useState<Fabric | null>(null);

  // Scroll to top on page change
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelectFromHome = (catName: string) => {
    setSelectedCategoryName(catName);
    navigateTo('fabrics');
  };

  const handleNavigateToContactWithFabric = (fabric: Fabric) => {
    setContactPrefilledFabric(fabric);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#1E3A8A] selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          if (page === 'contact') {
            setContactPrefilledFabric(null);
          }
          navigateTo(page);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectFabric={(fabric) => setSelectedFabric(fabric)}
            onSelectCategory={handleCategorySelectFromHome}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {currentPage === 'fabrics' && (
          <FabricsPage
            selectedCategoryName={selectedCategoryName}
            onSelectCategoryName={setSelectedCategoryName}
            onSelectFabric={(fabric) => setSelectedFabric(fabric)}
          />
        )}

        {currentPage === 'denim' && (
          <DenimPage
            onNavigate={navigateTo}
            onSelectFabric={(fabric) => setSelectedFabric(fabric)}
          />
        )}

        {currentPage === 'wholesale' && (
          <WholesalePage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'facility' && (
          <FacilityPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            prefilledFabric={contactPrefilledFabric}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* 4. Global Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* 5. Fabric Detail Modal */}
      <FabricDetailModal
        fabric={selectedFabric}
        onClose={() => setSelectedFabric(null)}
        onNavigateToContactWithFabric={handleNavigateToContactWithFabric}
      />

      {/* 6. Fabric Search Modal */}
      <FabricSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectFabric={(fabric) => setSelectedFabric(fabric)}
      />

      {/* 7. Legal Notice Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
